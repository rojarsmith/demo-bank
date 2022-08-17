import { useEffect } from "react"
import useSWR from "swr";

const adminAddresses = {
    "0x11bfbf6a1e96405aa0b552dd6e5d74bec8e18bfaf1bc3c9a67558b96eb2ff716": true
}

export const handler = (web3, provider) => () => {

    const { data, mutate, ...rest } = useSWR(() =>
        web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts()
            const account = accounts[0]

            if (!account) {
                throw new Error("Cannot retreive an account. Please refresh the browser.")
            }

            return account
        }
    );

    useEffect(() => {
        console.log("SUBSCRIBING TO EVENT")
        provider &&
            provider.on("accountsChanged",
                accounts => {
                    console.log("ON ACCOUNT DATA")
                    mutate(accounts[0] ?? null)
                }
            )

        console.log(provider)
    }, [provider])

    return {
        data,
        isAdmin: (
            data &&
            adminAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate,
        ...rest
    }
}
