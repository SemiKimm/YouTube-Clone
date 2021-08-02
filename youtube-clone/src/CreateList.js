import React from 'react';
function Data({ data }) {
  return (
    <div>
      <div>{data.commentData}</div>
    </div>
  );
}

function CreateList({ commentLists }) {
  return (
    <div>
      {commentLists.map((data) => (
        <Data data={data} key={data.id} />
      ))}
    </div>
  );
}
export default CreateList;
