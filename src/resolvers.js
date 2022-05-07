import { tasks } from "./sample";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World with GraphQL'
        },
        greet (root, { name }) {
            console.log(args.name);
            return `Hello ${name}!`; 
        },
        tasks() {
            return tasks;
        }
    },
    Mutation: {
        createTask(_, { input }){
            input._id = tasks.length;
            tasks.push(input);
            console.log(input);
            return input;
        }
    }
};