import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column, idProperty, pathProperty, keyProperty) => {
    return item[idProperty] + (column[pathProperty] || column[keyProperty]);
  };

  render() {
    const { data, columns, idProperty, pathProperty, keyProperty } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item[idProperty]}>
            {columns.map(column => (
              <td
                key={this.createKey(
                  item,
                  column,
                  idProperty,
                  pathProperty,
                  keyProperty
                )}
              >
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
TableBody.defaultProps = {
  idProperty: "_id",
  pathProperty: "path",
  keyProperty: "key"
};

export default TableBody;
