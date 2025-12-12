import { useRef } from "react"
import { QRCodeCanvas } from "qrcode.react";
import Button from "../01-atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data, showDownload = false }: {data: string, showDownload?: boolean, }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleDownload = () => {
    if (canvasRef.current) {
      const url = canvasRef.current.toDataURL("image/png")
      const link = document.createElement("a")
      link.download = `tommaso-randazzo-business-card.png`
      link.href = url
      link.click()
    }
  }

  const handleShare = async () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob(async (blob) => {
        if (blob) {
          const file = new File([blob], "business-card.png", { type: "image/png" })
          if (navigator.share && navigator.canShare({ files: [file] })) {
            try {
              await navigator.share({
                files: [file],
                title: `Tommaso Randazzo - Business Card`,
                text: `Contact information for Tommaso Randazzo (Web Developer)`,
              })
            } catch (error) {
              console.error("Error sharing:", error)
            }
          } else {
            // Fallback to download if sharing is not supported
            handleDownload()
          }
        }
      })
    }
  }

  return (
    <>
      <div className="my-1 flex justify-center items-center aspect-square bg-white p-3 border-black border-6 rounded-3xl">
        <QRCodeCanvas value={data} size={250} ref={canvasRef}/>
      </div>

      {showDownload && (
        <div className="grid grid-cols-2 gap-3">
          <Button onclick={handleDownload}>
            <FontAwesomeIcon icon="download" />
            Download
          </Button>
          <Button onclick={handleShare}>
            <FontAwesomeIcon icon="share" />
            Share
          </Button>
        </div>
      )}
    </>
  )
}
