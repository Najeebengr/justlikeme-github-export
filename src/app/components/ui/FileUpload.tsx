'use client';

// src/app/components/ui/FileUpload.tsx

import React from 'react';
import { cn } from '@/app/utils/cn';
import { Button } from './Button';

export interface FileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  error?: string;
  onChange?: (files: File[]) => void;
  className?: string;
  buttonText?: string;
  helpText?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept,
  multiple = false,
  maxSize,
  error,
  onChange,
  className,
  buttonText = 'Choose File',
  helpText,
}) => {
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [fileError, setFileError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const validateFiles = (files: File[]): boolean => {
    if (maxSize) {
      const oversizedFiles = files.filter(file => file.size > maxSize);
      if (oversizedFiles.length > 0) {
        const maxSizeMB = maxSize / (1024 * 1024);
        setFileError(`File size exceeds the ${maxSizeMB} MB limit`);
        return false;
      }
    }

    if (accept) {
      const acceptedTypes = accept.split(',').map(type => type.trim());
      const invalidFiles = files.filter(file => {
        const fileType = file.type;
        const fileExtension = `.${file.name.split('.').pop()}`;
        return !acceptedTypes.some(type => 
          type === fileType || type === fileExtension || type === '*/*'
        );
      });

      if (invalidFiles.length > 0) {
        setFileError(`Invalid file type. Accepted types: ${accept}`);
        return false;
      }
    }

    setFileError(null);
    return true;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    
    const fileArray = Array.from(files);
    if (validateFiles(fileArray)) {
      setSelectedFiles(multiple ? [...selectedFiles, ...fileArray] : fileArray);
      if (onChange) {
        onChange(multiple ? [...selectedFiles, ...fileArray] : fileArray);
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const removeFile = (index: number) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    if (onChange) {
      onChange(newFiles);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-neutral-900">
          {label}
        </label>
      )}
      
      <div
        className={cn(
          "relative border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center",
          dragActive ? "border-primary-500 bg-primary-50" : "border-neutral-300 bg-neutral-50",
          error || fileError ? "border-error-500" : ""
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <svg 
            className="w-10 h-10 text-neutral-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
            />
          </svg>
          
          <p className="text-sm text-neutral-600">
            Drag & drop your files here, or
          </p>
          
          <Button 
            type="button" 
            variant="primary" 
            size="sm" 
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
          
          {helpText && (
            <p className="text-xs text-neutral-500 mt-2">
              {helpText}
            </p>
          )}
        </div>
      </div>
      
      {selectedFiles.length > 0 && (
        <ul className="mt-4 space-y-2">
          {selectedFiles.map((file, index) => (
            <li 
              key={`${file.name}-${index}`} 
              className="flex items-center justify-between p-2 bg-neutral-100 rounded-md"
            >
              <div className="flex items-center">
                <svg 
                  className="w-5 h-5 text-neutral-500 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                <span className="text-sm truncate max-w-xs">{file.name}</span>
              </div>
              <button 
                type="button" 
                onClick={() => removeFile(index)}
                className="text-error-600 hover:text-error-800"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {(error || fileError) && (
        <p className="text-sm text-error-600 mt-1">
          {error || fileError}
        </p>
      )}
    </div>
  );
};
