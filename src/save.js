const sla = {
  boards: {
    tarefas: [
      {
        name: "para fazer",
        tasks: [],
      },
      {
        name: "fazendo",
        tasks: [],
      },
      {
        name: "feito",
        tasks: [],
      },
      // {
      //   name: "calica",
      //   tasks: [
      //     {
      //       name: "ser o the best",
      //       description: "normal",
      //       subtasks: {
      //         name: "continuar",
      //         done: false,
      //       },
      //     },
      //     {
      //       name: "ser o the best denovo",
      //       description: "normal",
      //       subtasks: {
      //         name: "continuar",
      //         done: false,
      //       },
      //     },
      //     {
      //       name: "ser o the best denovo",
      //       description: "normal",
      //       subtasks: {
      //         name: "continuar",
      //         done: false,
      //       },
      //     },
      //   ],
      // },
    ],
  },
};

localStorage.setItem("data", JSON.stringify(sla));
