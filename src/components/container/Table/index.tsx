import React, { useState } from "react";
import styles from "./Table.module.css";
import { Link } from "react-router-dom";
import { ContextMenu } from "../../Shared";
import { DivisaFormater } from "../../../utilities/divisa-formater";

interface DataRecord {
  [key: string]: any;
}

interface Props<T extends DataRecord> {
  data: T[];
  headers: string[];
  keys: string[];
  deleteItem: Function;
  setItemSelected: Function;
}

const Table = <T extends DataRecord>({
  headers,
  data,
  keys,
  deleteItem,
  setItemSelected,
}: Props<T>) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState("");
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.uuid}>
              {keys.map((key) => (
                <td key={key}>
                  {key === "purchasePrice" || key === "salePrice"
                    ? DivisaFormater({ value: d[key.toLowerCase()] })
                    : d[key.toLowerCase()]}
                </td>
              ))}
              <td>
                <ContextMenu
                  item={d}
                  openMenu={openMenu}
                  selected={selected}
                  setSelected={setSelected}
                  setOpenMenu={setOpenMenu}
                  deleteItem={deleteItem}
                  setItemSelected={setItemSelected}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
