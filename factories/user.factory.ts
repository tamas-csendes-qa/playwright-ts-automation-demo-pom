export type User = {
  username: string;
  password: string;
};

export const UserFactory = {
  standardUser(overrides?: Partial<User>): User {
    return {
      username: 'standard_user',
      password: 'secret_sauce',
      ...overrides,
    };
  },

  lockedOutUser(overrides?: Partial<User>): User {
    return {
      username: 'locked_out_user',
      password: 'secret_sauce',
      ...overrides,
    };
  },

  problemUser(overrides?: Partial<User>): User {
    return {
      username: 'problem_user',
      password: 'secret_sauce',
      ...overrides,
    };
  },

  performanceGlitchUser(overrides?: Partial<User>): User {
    return {
      username: 'performance_glitch_user',
      password: 'secret_sauce',
      ...overrides,
    };
  },

  errorUser(overrides?: Partial<User>): User {
    return {
      username: 'error_user',
      password: 'secret_sauce',
      ...overrides,
    };
  },

  visualUser(overrides?: Partial<User>): User {
    return {
      username: 'visual_user',
      password: 'secret_sauce',
      ...overrides,
    };
  },
};
