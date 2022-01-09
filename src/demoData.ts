import { UserData } from './types';

export const demoData: UserData = {
  id: "u001",
  firstName: "Austin",
  lastName: "Poor",
  friends: [
    {
      id: "u002",
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: "u003",
      firstName: "Sally",
      lastName: "Smith",
    },
    {
      id: "u004",
      firstName: "Sandwich",
      lastName: "The Dog",
    },
    {
      id: "u005",
      firstName: "Big",
      lastName: "Foot",
    },
  ],
  lists: [
    {
      id: "l001",
      title: "Groceries",
      owner: {
        id: "u001",
        firstName: "Austin",
        lastName: "Poor",
      },
      editors: [
        {
          id: "u002",
          firstName: "John",
          lastName: "Doe",
        },
      ],
      createdAt: "2021-02-03",
      description:
        "Our family grocery list! This has all the important info in it. It's a long description that might even wrap to multiple lines.",
      items: [
        {
          text: "Milk",
          notes: "2%",
          createdBy: {
            id: "u001",
            firstName: "Austin",
            lastName: "Poor",
          },
        },
        {
          text: "Eggs",
          createdBy: {
            id: "u002",
            firstName: "John",
            lastName: "Doe",
          },
        },
        {
          text: "Bread",
          completed: true,
          createdBy: {
            id: "u001",
            firstName: "Austin",
            lastName: "Poor",
          },
          completedBy: {
            id: "u002",
            firstName: "John",
            lastName: "Doe",
          },
        },
      ],
    },
    {
      id: "l002",
      title: "My To-Dos",
      owner: {
        id: "u001",
        firstName: "Austin",
        lastName: "Poor",
      },
      editors: [],
      createdAt: "2020-01-01",
      items: [
        {
          text: "Learn react",
          createdBy: {
            id: "u001",
            firstName: "Austin",
            lastName: "Poor",
          },
          completed: false,
        },
        {
          text: "Learn kubernetes",
          createdBy: {
            id: "u001",
            firstName: "Austin",
            lastName: "Poor",
          },
        },
      ],
    },
  ],
  friendLists: [],
};
