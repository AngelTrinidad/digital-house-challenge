export const mockNavigate = jest.fn();

export const mockGoBack = jest.fn();

export const screenNavigationProps: any = {
  navigation: {
    navigate: mockNavigate,
    goBack: mockGoBack,
  },
  route: {},
};
