
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Detail from "./detail";



function ModalView({ data }: { data: MapsLokasiKerusakanType }) {

    console.log(data)
    return (
        <DialogContent className="sm:max-w-[1300px] ">
            <DialogHeader>
                <DialogTitle>Pohon</DialogTitle>
            </DialogHeader>
            <Detail DATA={data} />
        </DialogContent>
    )
}

export default ModalView;