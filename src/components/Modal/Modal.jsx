import { Overlay, Modal, Button, Image } from './Modal.styled';

export const ModalWindow = ({ url, alt, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Modal>
        <Button type="button" onClick={onClose} aria-label="close">
          CLOSE
        </Button>
        <Image src={url} alt={alt} />
      </Modal>
    </Overlay>
  );
};
