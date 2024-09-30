const roleBasedAccess = (requiredRole) => (req, res, next) => {
    const { role } = req.user;
  
    if (role !== requiredRole) {
      return res.status(403).json({ error: "Access forbidden: insufficient rights" });
    }
    next();
  };
  
  module.exports = roleBasedAccess;
  