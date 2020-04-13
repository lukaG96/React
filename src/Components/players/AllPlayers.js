import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../../redux/index";
import { FlexContainer } from "../_styledComponents/flexContainer";
import PlayerIcon from "./PlayerIcon";

function AllPlayers() {
  const players = useSelector((state) => state.playersKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
    console.log(players);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return players.loading ? (
    <h2>Loading data</h2>
  ) : players.errors ? (
    <h2>{players.errors}</h2>
  ) : (
    <FlexContainer>
      {players &&
        players.players &&
        players.players.map((player) => (
          <PlayerIcon key={player.id} player={player} />
        ))}
    </FlexContainer>
  );
}

export default AllPlayers;
