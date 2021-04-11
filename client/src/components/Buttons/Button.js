import React from "react";
import { Button } from "semantic-ui-react";
import { styles } from "../styles/Global";

export const SubmitButton = ({
  handleSubmit,
  name,
}) => {
  return (
    <Button style={styles.submitButton} onClick={handleSubmit}>
      {name}
    </Button>
  )
}

export const CancelButton = ({
  handleCancel,
  name,
}) => {
  return (
    <Button onClick={handleCancel}>
      {name}
    </Button>
  );
}

export const UploadButton = ({
  handleUpload,
  name,
}) => {
  return (
    <Button style={styles.uploadButton} onClick={handleUpload}>
      {name}
    </Button>
  );
}

export const DiscardButton = ({
  handleDiscard,
  name,
}) => {
  return (
    <Button style={styles.discardButton} onClick={handleDiscard}>
      {name}
    </Button>
  );
}

export const ActiveButton = ({
  handleActive,
  name,
}) => {
  return (
    <Button style={styles.activeButton} onClick={handleActive}>
      {name}
    </Button>
  );
}

export const EditButton = ({
  handleEdit,
  name,
}) => {
  return (
    <Button style={styles.editButton} onClick={handleEdit}>
      {name}
    </Button>
  );
}