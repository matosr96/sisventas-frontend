import React, { useState } from "react";
import styles from "./Table.module.css";
import { ContextMenu } from "../../Shared";
import { DivisaFormater } from "../../../utilities/divisa-formater";
import FormCategoriesUpdate from "../../../screens/categories/formularios/update";
import { ScreenName } from "../../../constants-definitions";

interface DataRecord {
  [key: string]: any;
}

interface Props<T extends DataRecord> {
  data: T[];
  headers: string[];
  keys: string[];
  setItemSelected: Function;
  screenName: string;
}

const Table = <T extends DataRecord>({
  headers,
  data,
  keys,
  setItemSelected,
  screenName,
}: Props<T>) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const [selected, setSelected] = useState("");

  console.log("QUE ES ", selected);
  return (
    <>
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
                  <td key={key}>{d[key]}</td>
                ))}
                <td>
                  <ContextMenu
                    item={d}
                    openMenu={openMenu}
                    selected={selected}
                    setSelected={setSelected}
                    setOpenMenu={setOpenMenu}
                    setItemSelected={setItemSelected}
                    screenName={screenName}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
