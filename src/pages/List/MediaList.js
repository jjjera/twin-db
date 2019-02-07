import React, { Component } from 'react';
import {Card,CardBody,CardHeader,Table} from 'reactstrap';

class MediaList extends Component {

componentDidMount() {

}

  render() {
    // const employees = this.props.employees;
    // const users = this.props.users;

    //Combining both datas from different storage from firebase
    const data = {...this.props.employees,...this.props.users}
    // console.log('data is',data);
    return (
      <div className="animated fadeIn">
            <Card>
              <CardHeader style={{color:'red'}}>List</CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="lg">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Mobile no</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Object.keys(data).map((key,index) => {
                    return(
                    <tr key={key} style={{color: 'blue'}}>
                      <td>{index + 1}</td>
                      <td><img src={data[key].profilePicture} alt="" style={{height: 200, width: 200}}/></td>                      <td>{data[key].name}</td>
                      <td>{data[key].mobileNo}</td>
                      <td>{data[key].name}</td>
                    </tr>
                    );
                  })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
      </div>
    );
  }

}

export default MediaList;
