'use client'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { formatAddress } from 'ens-tools'
import { useToast } from '@/components/ui/use-toast'

export const AgentDetails = ({isConnected, transport, address}: {isConnected: boolean, transport: string, address: string}) => {
  const shortAddress = formatAddress(address);
  const { toast } = useToast()
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      toast({
        title: "Address copied"
      })
      // Optionally, you can add a notification to inform the user that the address has been copied.
    } catch (err) {
      toast({
        title: "Failed to copy address"
      })
      // Handle errors here, such as displaying a notification to the user.
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agent Details</CardTitle>
      </CardHeader>
      <CardContent>
          <div className='flex gap-6'>
            <Image src="/416.png" alt="avatar" className="rounded-md w-32 h-32" width={80} height={80} />
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-row items-center justify-between gap-0">
                <span className="uppercase text-sm text-muted-foreground">
                  Safe Address
                </span>
                <Button onClick={copyToClipboard} size="sm" variant="outline">
                  {shortAddress}
                  <Copy className="w-4 h-4 ml-3 text-opacity-70" />
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="uppercase text-sm text-muted-foreground">Status</span>
                <Badge variant="secondary">{isConnected ? "Connected" : "Disconnected"}</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
              <span className="uppercase text-sm text-muted-foreground">Transport</span>
                <Badge variant="secondary">{transport}</Badge>
              </div>
            </div>
          </div>
      </CardContent>
    </Card>
  )
}

