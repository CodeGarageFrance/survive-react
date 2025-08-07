import * as Dialog from "@radix-ui/react-dialog";
import { useGameState } from "@/stores/GameState";

export function SeasonModal({ isOpen, onOpenChange }) {

  const { season } = useGameState((state) => state);
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 shadow-xl">
          <Dialog.Title className="text-lg font-bold mb-2">
            Changement de saison !
          </Dialog.Title>

          { season === 'summer' ? 
            <Dialog.Description className="mb-4">
              ☀️ C'est l'été ! Profitez du beau temps pour récolter des ressources.'
            </Dialog.Description> :
            <Dialog.Description className="mb-4">
              🥶 C'est l'hiver ! Attention à la nourriture, il va falloir en trouver !
            </Dialog.Description>
          }

          <Dialog.Close className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            Fermer
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
