import React from "react";
import { Author } from "../../Types/type";
type Props = {
  data: Author;
};
export default function AuthorObj(props: Props) {
  const { data } = props;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  {/* <th>Author Id</th> */}
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>{data.id}</td> */}
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
