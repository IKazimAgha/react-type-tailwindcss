import React from 'react';
import { useTranslation } from 'react-i18next';
import AlertSVG from "../icons/alertIcon.svg";
import CancelSVG from "../icons/cancelIcon.svg";
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
};

const DeleteModalAddress: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="fixed inset-0 flex justify-center items-end sm:items-end lg:items-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div> {/* Backdrop */}

      <div className="bg-white p-6 rounded-t-3xl w-full lg:w-[30rem] lg:rounded-3xl relative z-10">
        <div className='w-full mb-5 flex justify-center'>
          <div onClick={() => onClose()} className='w-[5rem] h-[5rem] flex justify-center bg-mainYellow items-center rounded-full'>
            <img src={AlertSVG} />
          </div>
        </div>
        <div className="flex items-center mx-[5.5rem] sm:mx-[5.5rem] text-center justify-center m-0">
          <h2 className='items-center text-textBlue font-bold font-sf-pro-rounded'>{t('deleteAddressText')}</h2>
        </div>
        <div className='w-full flex justify-between my-10'>
          <div onClick={() => onClose()} className='w-[11rem] flex justify-center py-2 px-5 border border-1 rounded-full bg-mainYellow text-mainBlue font-sf-pro-rounded'>{t('no')}</div>
          <div onClick={() => onClose()} className='w-[11rem] flex justify-center py-2 px-5 border border-1 rounded-full bg-mainGray text-mainBlue font-sf-pro-rounded'>{t('yes')}</div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalAddress;
