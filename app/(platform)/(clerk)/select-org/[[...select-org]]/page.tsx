import { OrganizationList } from "@clerk/nextjs";
export const SelectOrgPage = () => {
    return (
        <OrganizationList 
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
        />
    )
}

export default SelectOrgPage;
