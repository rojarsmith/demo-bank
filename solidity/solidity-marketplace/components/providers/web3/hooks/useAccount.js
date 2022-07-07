import { useEffect } from "react"
import useSWR from "swr";

const adminAddresses = {
    "0xD9289feEf1F73e3E4AfCd9b0138c844BA7ECB931": true
}

export const handler = (web3, provider) => () => {

    const { data, mutate, ...rest } = useSWR(() =>
        web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0]
        }
    );

    useEffect(() => {
        provider &&
            provider.on("accountsChanged",
                accounts => mutate(accounts[0] ?? null)
            )
    }, [provider])

    return {
        account: {
            data,
            isAdmin: (data && adminAddresses[data]) ?? false,
            mutate,
            ...rest
        }
    }
}
