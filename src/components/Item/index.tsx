import { Container, Buttons } from './styles'

import { useDispatch } from 'react-redux'
import { deleteItem } from '../../Store/sliceLists'
import { editModal } from '../../Store/sliceModals'

import { FaEllipsisH, FaTimes } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'

import { Draggable, DraggableProvided } from 'react-beautiful-dnd'

interface itemProps {
  index: number
  listIndex: number
  listItem: {
    id: string
    content: string
  }
}

export const Item = ({ index, listIndex, listItem }: itemProps) => {
  const dispatch = useDispatch()

  // Function to calculate the hue for the button's background color
  const calculateHue = (index: number) => {
    // Start with a dark shade of blue (hue = 240)
    const initialHue = 240;
    // Increase the hue by 5 for each item
    const hue = initialHue + index * 5;
    // Ensure the hue stays within the range [0, 360]
    return hue % 360;
  };
  

  const handleDeleteItem = (listIndex: number, index: number) => {
    dispatch(deleteItem({ listIndex, index }))
  }

  const openEditModal = () => {
    dispatch(editModal({ listIndex, index, value: listItem.content }))
  }

  const ItemButtons = ({listIndex}: any) => {
    if (listIndex > 1) {
      return <>
        <button onClick={() => handleDeleteItem(listIndex, index)}
        >
          X
        </button>
        </>
      } else {
        return <></>
      }
  }

  return (
    <Draggable key={listItem.id} draggableId={listItem.id} index={index} >
      {(provided: DraggableProvided) => (
        <Container
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          style={{ ...provided.draggableProps.style, backgroundColor: `hsl(${calculateHue(index)}, 100%, 50%)` }}
        >
          <div>
            {listItem.content}
          </div>
          <Buttons>
            <button onClick={openEditModal}>
              <FaEllipsisH size={22} />
            </button>
            <ItemButtons listIndex={listIndex} />
          </Buttons>
        </Container >
      )}
    </Draggable >
  )
}