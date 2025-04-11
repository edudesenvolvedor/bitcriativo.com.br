'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React, { useRef, useState } from 'react';
import Button from '@/components/Button';

interface IProps {
  textButton: string;
}

export const PortfolioView: React.FC<IProps> = ({ textButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const imageRef = useRef<HTMLImageElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 3));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button className="w-full mt-8 font-semibold">{textButton}</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

        {isOpen && (
          <div className="fixed top-6 right-6 z-[70] flex items-center gap-2">
            <Dialog.Close asChild>
              <button
                className="p-2 rounded-full bg-white shadow border hover:text-gray-700 text-gray-500"
                aria-label="Fechar"
              >
                <Cross2Icon className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>
        )}

        <Dialog.Content
          onPointerUp={handleMouseUp}
          onMouseUp={handleMouseUp}
          className="fixed top-1/4 left-1/2 z-50 w-[90vw] max-w-4xl  h-[40vh] lg:h-[70vh] -translate-x-1/2 -translate-y-1/4 rounded-2xl focus:outline-none"
        >
          <div
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            className="w-full h-full overflow-hidden border rounded-xl cursor-grab active:cursor-grabbing bg-black/5"
          >
            <img
              ref={imageRef}
              src="https://picsum.photos/1200/2400"
              alt="Imagem"
              draggable={false}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.2s ease',
              }}
              className="w-full h-auto select-none pointer-events-none"
            />
          </div>
          <div className={'p-6 mt-4 rounded-xl bg-black/70 text-white/60'}>
            <Dialog.Title className={'text-2xl'}>Visualização da Imagem</Dialog.Title>
            <Dialog.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
