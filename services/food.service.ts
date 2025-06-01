export const getFoodImage = (pathUrl: string) => {
  return `${process.env.BACKEND_URL}/food/${pathUrl}`;
};
