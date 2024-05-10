import { http, createConfig } from 'wagmi'
import { gnosis, mainnet } from 'wagmi/chains'

export const config = createConfig({
  chains: [gnosis, mainnet],
  transports: {
    [mainnet.id]: http(),
    [gnosis.id]: http(),
  },
})

