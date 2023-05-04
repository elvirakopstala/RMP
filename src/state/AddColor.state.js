import { create } from 'zustand';
import { persist } from 'zustand/middleware'

const useColors = create(
  persist(
    (set, get) => ({
      colors: [],
      addColor: (color) => set((state) => ({ colors: [...state.colors, color] })),
      removeColor: (color) => set((state) => (
        { colors: [...state.colors.filter((colorState) => colorState.colorHex !== color.colorHex)] }
      )),
    }),
    {
      name: 'added-colors'
    }
  )
)

export default useColors;