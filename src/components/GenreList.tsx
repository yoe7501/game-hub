import { HStack, List, ListItem, Image,  Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre} : Props ) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1 , 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16];

  if(error) return null;
  return (
    <List>
        {isLoading && skeletons.map((skeleton)=> (
            <ListItem  key={skeleton} paddingY='10px'>
                     <GenreSkeleton />
            </ListItem>
           
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px' borderRadius='10px' backgroundColor={genre.id === selectedGenre?.id ? 'gray.900' : 'normal'}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button  onClick={() => onSelectGenre(genre)}variant='link' fontSize='lg'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
