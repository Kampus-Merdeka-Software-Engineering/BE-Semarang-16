import User from "../models/UserModel.js";

// ini daftar user
export const signUpUser = async(req, res) =>{
  const {username, name, phoneNumber, email, password} = req.body;
  try {
      await User.create({
        username: username,
          name: name,
          phone_number: phoneNumber,
          email: email,
          password : password,
          
      });
      res.status(201).json({msg: "Pendaftaran Berhasil"});
  } catch (error) {
      res.status(400).json({msg: error.message});
  }
}
// ini nyari semua user
export const findAllUser = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes:['username','name','email']
    });
    res.status(200).json(users);
  } catch (error) {
    res.send(error.message);
  }
};


// ini nyari user dari usernamenya
export const findUserByUsername = async (req, res) => {
  try {
    const { username } = req.query; 
    if (!username) {
      return res.status(400).json({ message: 'Username parameter is required' });
    }

    const user = await User.findOne({
      where: { username }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};