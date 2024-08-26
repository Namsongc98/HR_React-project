import SpanTable from "../components/componentUI/SpanTable"
export const setClassNameColumnsTable = (dataColumns, status, action) => {
  dataColumns.forEach((item) => {
    switch (item.dataIndex) {
      case 'status':
        item.render = function (text, record) {
          return <SpanTable text={text} statusClass={status[record.status]} />
        }
        break;
      case 'actions':
        item.render = function (text, record) {
          return (
            <SpanTable text={text} statusClass={action['default']} />
          )
        }
      default:
        break;
    }
  })
}