import React from 'react';
import { useTranslation } from 'react-i18next';
import EditSVG from "../icons/editIcon.svg";
import DeleteSVG from "../icons/delete.svg";
import CancelSVG from "../icons/cancelIcon.svg";
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onClickDelete: () => void;
  title: string;
  children?: React.ReactNode;
};

const ModalAddress: React.FC<ModalProps> = ({ isOpen, onClose, title, children, onClickDelete }) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="fixed inset-0 flex justify-center items-end sm:items-end lg:items-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div> {/* Backdrop */}

      <div className="bg-white p-6 rounded-t-3xl w-full lg:w-[40rem] lg:rounded-3xl relative z-10">
        <div onClick={() => navigate('/editAddress')} className='w-full border-2 bg-aquaBlue flex rounded-[1.6rem] py-5 px-5'>
           <div className='w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full'>
              <img src={EditSVG} className='w-[1.5rem] h-[1.5rem]' />
           </div>
           <div className='ml-[1rem] font-normal font-sf-pro-rounded'>
                <h1 className='font-normal text-[1rem] text-mainBlue'>{t('editText')}</h1>
                <h5 className='font-400 text-[1rem] text-secBlue'>{t('locationText')}</h5>
           </div>
        </div>
        <div onClick={() => onClickDelete()} className='w-full border-2 bg-aquaBlueLight my-5 flex rounded-[1.6rem] py-5 px-5 '>
           <div className='w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full'>
              <img src={DeleteSVG} className='w-[1.5rem] h-[1.5rem]'  />
           </div>
           <div className='ml-[1rem] font-normal font-sf-pro-rounded'>
                <h1 className='font-normal text-[1rem] text-mainBlue leading-[18px]'>{t('deleteText')}</h1>
                <h5 className='font-400 text-[1rem] text-secBlue'>{t('locationText')}</h5>
           </div>
        </div>
        <div className='w-full mb-5 flex justify-center'>
          <div onClick={() => onClose()} className='w-[3rem] h-[3rem] flex justify-center bg-red-200 items-center rounded-full'>
            <img src={CancelSVG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddress;
