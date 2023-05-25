import ChatsHeader from './ChatsHeader'

interface ChatsProps {}

const Chats: React.FC<ChatsProps> = ({}): JSX.Element => {
	return (
		<div>
			{/* HEADER COMPONENT */}
			<ChatsHeader />
			{/* CHATS LIST WITH SEARCH */}
		</div>
	)
}

export default Chats
