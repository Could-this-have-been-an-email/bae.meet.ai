import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class MeetingNotes extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  render() {
    return (
      <div className="container">
        <Editor
          apiKey="avgvd7u4i68a9mq24lbgo9zusv5tq1vyu4pw9xrjkt9depds"
          initialValue="<p>This is the initial content of the editor</p>"
          id="notes"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help"
          }}
          onEditorChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default MeetingNotes;
