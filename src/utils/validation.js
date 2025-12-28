export const loginValidation = {
  email: {
    presence: {
      allowEmpty: false,
      message: '^Email is required'
    },
    email: true
  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^Password is required'
    }
  }
};

export const registerValidation = {
  email: {
    presence: {
      allowEmpty: false,
      message: '^Email is required'
    },
    email: true
  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^Password is required'
    },
    length: {
      minimum: 6,
      message: '^Password must be at least 6 characters'
    }
  }
};
