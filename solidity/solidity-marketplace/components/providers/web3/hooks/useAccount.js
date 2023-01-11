import { useEffect } from "react"
import useSWR from "swr";

const adminAddresses = {
    "0x9b27c1a01daa206220657a0f8cc3f6536434b715227e80be80daba434d6b1c5c": true, // Hex: 9e0FCC8d4706D2a857CcA1Ca111b2F7274D58C61
    "0x11bfbf6a1e96405aa0b552dd6e5d74bec8e18bfaf1bc3c9a67558b96eb2ff716": true,
    "0x08a8b4bda11c956a93dc13830ee42bfa4139a6e7c68f33a8dba685f0f9a67f3c": true
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
        const mutator = accounts => mutate(accounts[0] ?? null)
        provider?.on("accountsChanged", mutator)

        return () => {
            provider?.removeListener("accountsChanged", mutator)
        }
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
