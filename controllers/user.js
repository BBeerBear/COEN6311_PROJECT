exports.getProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const profile = await User.findOne({ username }).select('-password');
    if (!profile) {
      return res.json({ ok: false });
    }
    const posts = await Post.find({ user: profile._id })
      .populate('user')
      .sort({ createdAt: -1 });
    res.json({ ...profile.toObject(), posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
