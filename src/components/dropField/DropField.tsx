import { ChangeEvent, useEffect, useState } from 'react';
import { Button, PictureContainer, SDropField, SubFont, TrashContainer } from './styles';

const DropField: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const throwTrash = () => {
    setSelectedImage(null);
  };

  const saveImageLocal = (imageData: string) => {
    localStorage.setItem('images', imageData);
  };
  const getImageFromLocalStorage = (): string | null => {
    return localStorage.getItem('images');
  };
  const savedImage = getImageFromLocalStorage();
  useEffect(() => {
    if (savedImage) setSelectedImage(savedImage);
  }, [savedImage]);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target?.result) {
          const uploadImage = event.target.result as string;
          saveImageLocal(uploadImage);
          setSelectedImage(uploadImage);
        } else {
          console.error('Unavailable');
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <>
      <SDropField.FileUploadContainer>
        <SDropField.FileInput type="file" id="fileInput" name="uploadedFile" onChange={handleFileChange} />
        <SDropField.UploadLabel
          htmlFor="fileInput"
          selectedImage={!!selectedImage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {selectedImage ? (
            <TrashContainer>
              <SDropField.UploadedImage src={selectedImage} alt="Selected" />
              {isHovered && (
                <Button onClick={throwTrash}>
                  <svg
                    style={{ position: 'absolute' }}
                    width="3em"
                    height="3em"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#ffffff">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                    </g>
                  </svg>
                </Button>
              )}
            </TrashContainer>
          ) : (
            <PictureContainer>
              <svg width="2em" height="2em" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></rect>
                  <path d="M.5 11h13m-9.66 0l5.21-4.88a.5.5 0 0 1 .64 0l3.81 2.73"></path>
                  <circle cx="4.5" cy="4.5" r="1.5"></circle>
                </g>
              </svg>
              <SubFont>사진 선택(00/00)</SubFont>
            </PictureContainer>
          )}
        </SDropField.UploadLabel>
      </SDropField.FileUploadContainer>
    </>
  );
};

export default DropField;
