export const up = async (queryInterface) => {
  await queryInterface.bulkInsert("migrants", [
    {
      name: "John Doe",
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("migrants", null, {});
};
