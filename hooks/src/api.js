export const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Phạm Ngọc Đông",
          age: 22,
          address: "TPHCM",
        },
        status: 200,
      });
    }, 1500);
  });
