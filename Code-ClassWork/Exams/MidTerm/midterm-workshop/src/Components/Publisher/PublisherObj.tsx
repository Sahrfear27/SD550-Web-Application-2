import React from "react";
import { Publiser } from "../../Types/type";
type Props = {
  data: Publiser;
};
export default function PublisherObj(props: Props) {
  const { data } = props;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Publisher Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.name}</td>
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
