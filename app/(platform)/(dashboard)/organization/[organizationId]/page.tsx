import { auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {

    const { orgId } = auth();

    return (
        <div>
            Org page for {orgId}
        </div>
    )
}

export default OrganizationIdPage;