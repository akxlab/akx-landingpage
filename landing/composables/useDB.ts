import {useSupabaseClient} from "#imports";

export default async function() {
    const db = useSupabaseClient()

    const uuid = async () => {
        return db.from('orders').insert({}).select();
    }

    return {uuid};
}