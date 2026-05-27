// enums in typescript

// enums are a way to define a set of named constants. They can be used to represent a collection of related values that can be either numeric or string values.

enum Direction {
    Up,
    Down,
    Left,
    Right
}

// By default, enums are assigned numeric values starting from 0. So, in the above example, Up is assigned the value 0, Down is assigned the value 1, Left is assigned the value 2, and Right is assigned the value 3.

// We can also assign specific values to the enum members. For example:

enum DirectionWithValues {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

// In this case, Up is assigned the value 1, Down is assigned the value 2, Left is assigned the value 3, and Right is assigned the value 4.

// Enums can also have string values. For example:

enum DirectionWithStringValues  {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// In this case, Up is assigned the value "UP", Down is assigned the value "DOWN", Left is assigned the value "LEFT", and Right is assigned the value "RIGHT".

// We can also use enums in functions. For example:

function move(direction: Direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up");
            break;
        case Direction.Down:
            console.log("Moving down");
            break;
        case Direction.Left:
            console.log("Moving left");
            break;
        case Direction.Right:
            console.log("Moving right");
            break;
    }
}

move(Direction.Up); // Output: Moving up
move(Direction.Down); // Output: Moving down
move(Direction.Left); // Output: Moving left
move(Direction.Right); // Output: Moving right




enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

function checkStatus(status: Status) {
    switch (status) {
        case Status.Active:
            console.log("Status is active");
            break;
        case Status.Inactive:
            console.log("Status is inactive");
            break;
        case Status.Pending:
            console.log("Status is pending");
            break;
    }
}

checkStatus(Status.Active); // Output: Status is active
checkStatus(Status.Inactive); // Output: Status is inactive
checkStatus(Status.Pending); // Output: Status is pending   





enum StatusCode {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}


// app.get("/status", (req: express.Request, res: express.Response) => {
//     res.status(StatusCode.Success).send("OK");
// })

// function getStatusMessage(statusCode: StatusCode) {
//     switch (statusCode) {
//         case StatusCode.Success:
//             console.log("Success");
//             break;
//         case StatusCode.NotFound:
//             console.log("Not Found");
//             break;
//         case StatusCode.InternalServerError:
//             console.log("Internal Server Error");
//             break;
//     }
// }

// getStatusMessage(StatusCode.Success); // Output: Success
// getStatusMessage(StatusCode.NotFound); // Output: Not Found
// getStatusMessage(StatusCode.InternalServerError); // Output: Internal Server Error
