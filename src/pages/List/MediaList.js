import React, { Component } from 'react';
import {Card,CardBody,CardHeader,Table} from 'reactstrap';

class MediaList extends Component {

  render() {
    // const employees = this.props.employees;
    // const users = this.props.users;

    //Combining both datas from different storage from firebase
    const data = {...this.props.employees,...this.props.users}
    // console.log('data is',data);
    return (
      <div className="animated fadeIn">
            <Card>
              <CardHeader style={{color:'Green',width:1000, fontWeight: 'bold'}}>Play List!!</CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="lg">
                  <thead style={{color: 'blue'}}>
                    <tr>
                      <th>S.No</th>
                      <th>Artist</th>
                      <th>Artist Image</th>
                      <th>Songs</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Object.keys(data).map((key,index) => {
                    return(
                    <tr key={key} style={{color: 'blue'}}>
                      <td>{index + 1}</td>
                      <td>{data[key].name}</td>
                      <td>
                        <img
                          src={data[key].profilePicture}
                          alt=""
                          style={{height: 200, width: 200}}
                        />
                      </td>
                      {data[key].audio ? (
                        <td>
                          <audio
                            ref="audio_tag"
                            src={data[key].audio}
                            controls
                          />
                        </td>
                      )
                        : ('No Songs Available !')
                      }
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
