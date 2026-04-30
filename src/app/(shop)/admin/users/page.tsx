export const revalidate = 0;

import { getPaginatedUsers } from '@/actions';
import { Title } from '@/components';

import { redirect } from 'next/navigation';
import { UsersTable } from './ui/UsersTable';

export default async function UsersPage() {


  const { ok, users = [] } = await getPaginatedUsers();

  if( !ok ){
    redirect('/auht/login')
  }


  return (
    <>
      <Title title="user maintenance" />

      <div className="mb-10">
      <UsersTable users={ users } />
      </div>
    </>
  );
}