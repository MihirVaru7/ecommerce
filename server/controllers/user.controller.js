

/* internal imports */
const userService = require("../services/user.service");

/* sign up an user */
exports.signUp = async (req, res, next) => {
  try {
    await userService.signUp(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* sign in an user */
exports.signIn = async (req, res, next) => {
  try {
    await userService.signIn(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* reset user password */
exports.forgotPassword = async (req, res, next) => {
  try {
    await userService.forgotPassword(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* login persistance */
exports.persistLogin = async (req, res, next) => {
  try {
    await userService.persistLogin(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get all users */
exports.getUsers = async (req, res, next) => {
  try {
    await userService.getUsers(res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update user */
exports.updateUser = async (req, res, next) => {
  try {
    await userService.updateUser(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
