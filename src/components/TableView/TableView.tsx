import { useState, useRef, useEffect, useMemo } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { TableVirtuosoHandle } from 'react-virtuoso';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import classes from './TableView.module.scss';
import TableOptions from '../TableOptions/TableOptions';
import Table from '../Table/Table';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

interface TableViewProps {
  valid: boolean;
  activeView: string;
  variables: Record<string, string>[];
  allValues: Record<string, string[]>;
  filteredValues: Record<string, string[]>;
  searchTerm: string;
  filters: Record<string, string[]>;
  setFilters: Dispatch<SetStateAction<Record<string, string[]>>>;
  allFields: string[];
}

/** Remove columns that are completely empty across all rows (null/undefined/''/whitespace). */
function dropEmptyColumns(rows: Record<string, string>[]) {
  if (!rows?.length) return { rows, columns: [] as string[] };

  // Union of keys from all rows
  const cols = Array.from(
    rows.reduce<Set<string>>((acc, r) => {
      Object.keys(r || {}).forEach(k => acc.add(k));
      return acc;
    }, new Set<string>())
  );

  const keep = cols.filter(col =>
    rows.some(r => {
      const v = r?.[col];
      return v !== null && v !== undefined && String(v).trim() !== '';
    })
  );

  const pruned = rows.map(r => {
    const o: Record<string, string> = {};
    for (const col of keep) o[col] = r?.[col] ?? '';
    return o;
  });

  return { rows: pruned, columns: keep };
}

function TableView({
  valid,
  activeView,
  variables,
  allValues,
  filteredValues,
  searchTerm,
  filters,
  setFilters,
  allFields
}: TableViewProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [checkedColumns, setCheckedColumns] = useState(
    ['Id', 'Section', 'Label', 'Datatype', 'Cardinality', 'Enumeration', 'MissingValueCodes']
      .filter(x => allFields.includes(x))
  );

  const [sortField, setSortField] = useState('Id');
  const [sortDirection, setSortDirection] = useState<'Ascending' | 'Descending'>('Ascending');

  // Keep original behavior but avoid mutating props
  const sortedVariables = useMemo(() => {
    if (!valid) return variables;
    const copy = [...variables];
    return copy.sort((a, b) =>
      sortDirection === 'Ascending'
        ? (a[sortField] ?? '').localeCompare(b[sortField] ?? '')
        : (b[sortField] ?? '').localeCompare(a[sortField] ?? '')
    );
  }, [valid, variables, sortField, sortDirection]);

  const tableRef = useRef<TableVirtuosoHandle | null>(null);

  const sortableColumns = ['Id', 'Section', 'Label', 'Datatype', 'Cardinality']
    .filter(x => allFields.includes(x));

  // Prune empty columns only in fallback mode (!valid)
  const { rows: fallbackRows, columns: nonEmptyCols } = useMemo(() => {
    if (valid) {
      return { rows: sortedVariables, columns: [] as string[] };
    }
    return dropEmptyColumns(sortedVariables);
  }, [valid, sortedVariables]);

  // When invalid, sync visible columns to the non-empty set
  useEffect(() => {
    if (!valid && nonEmptyCols.length) {
      setCheckedColumns(nonEmptyCols);
    }
  }, [valid, nonEmptyCols]);

  return (
    <div style={{ display: (activeView === 'table' || !valid) ? 'block' : 'none' }}>
      {valid && sortableColumns.length > 0 && (
        <TableOptions
          sortField={sortField}
          setSortField={setSortField}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          checkedColumns={checkedColumns}
          setCheckedColumns={setCheckedColumns}
          sortableColumns={sortableColumns}
          allFields={allFields}
        />
      )}

      {!valid && (
        <div className={classes.notice}>
          <FontAwesomeIcon icon={faCircleExclamation} className={classes['icon']} />
          Limited view: Unsupported data format. Please ensure data follows{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bmir-radx/radx-data-dictionary-specification/blob/main/radx-data-dictionary-specification.md"
          >
            these specifications
          </a>.
        </div>
      )}

      <Table
        valid={valid}
        variables={valid ? sortedVariables : fallbackRows}
        searchTerm={searchTerm}
        checkedColumns={checkedColumns}
        filters={filters}
        setFilters={setFilters}
        allValues={allValues}
        filteredValues={filteredValues}
        tableRef={tableRef}
        setShowScrollTop={setShowScrollTop}
      />

      {showScrollTop && <ScrollToTop scrollRef={tableRef} />}
    </div>
  );
}

export default TableView;
