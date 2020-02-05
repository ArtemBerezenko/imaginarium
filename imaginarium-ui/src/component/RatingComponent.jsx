import React, {Component} from 'react'
import ApiService from "../service/ApiService";

class RatingComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null
        };
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.reloadEmployeeList = this.reloadEmployeeList.bind(this);
    }

    componentDidMount() {
        this.reloadEmployeeList();
    }

    reloadEmployeeList() {
        ApiService.getGameRating()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    deleteEmployee(id) {
        ApiService.deleteEmployee(id)
            .then(res => {
                this.setState({message: 'Employee deleted successfully.'});
                this.setState({users: this.state.users.filter(employee => employee.id !== id)});
            })

    }

    deleteGame() {
        ApiService.deleteGame()
            .then(res => {
                this.setState({message: 'Users deleted successfully.'});
                ApiService.getGameRating()
                    .then((res) => {
                        this.setState({users: res.data})
                    });
            });
    }

    editEmployee(id) {
        window.localStorage.setItem("employeeId", id);
        this.props.history.push('/edit-employee');
    }

    addEmployee() {
        window.localStorage.removeItem("employeeId");
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee Details</h2>
                <button className="btn-success" style={{width: '100px'}} onClick={() => this.addEmployee()}> Create
                </button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th className="hidden">Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.salary}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.editEmployee(employee.id)}
                                                style={{marginLeft: '20px'}}> Edit
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-danger" onClick={() => this.deleteGame()}> Delete
                    </button>
                </div>
            </div>
        );
    }

}

export default RatingComponent;