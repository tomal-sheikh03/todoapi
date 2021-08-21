const url = 'http://localhost:8000/tasks'
const documentation = [
    {
        title : "Simple To-Do API",
        description : "A simple to-do API",
        version : "1.0.0",
        viewingAllTasks: [
            {
                command : "GET",
                url: `${url}/list`,
                action: "Shows all tasks"
            }
        ],
        creatingANewTask: [
            {
                command : "POST",
                url: `${url}/create`,
                action: "Creates a new task"
            }
        ],
        updatingATask: [
            {
                command : "PUT",
                url: `${url}/<ID>`,
                action: "Updates an existing task"
            }
        ],
        deleteATask: [
            {
                command : "DELETE",
                url: `${url}/<ID>`,
                action: "Deletes an existing task"
            }
        ],
    }
];

module.exports = documentation;