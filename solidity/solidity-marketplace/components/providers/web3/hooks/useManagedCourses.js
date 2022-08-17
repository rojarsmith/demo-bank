import { normalizeOwnedCourse } from "@utils/normalize"
import useSWR from "swr"

export const handler = (web3, contract) => account => {

    const swrRes = useSWR(() =>
        (web3 && contract && account) ? `web3/managedCourses/${account}` : null,
        async () => {
            const courses = []
            const courseCount = await contract.methods.getCourseCount().call()

            return courses
        }
    )

    return swrRes
}